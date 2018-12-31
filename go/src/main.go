package main

import (
   "fmt"
   "github.com/gin-contrib/cors"                        // Why do we need this package?
   "github.com/gin-gonic/gin"
   "github.com/jinzhu/gorm"
   _ "github.com/jinzhu/gorm/dialects/sqlite"           // If you want to use mysql or any other db, replace this line
)

var db *gorm.DB                                         // declaring the db globally
var err error

type User struct {
   ID uint `json:"id"`
   FirstName string `json:"firstname"`
   Email string `json:"email"`
   Password string `json:"password"`
   Score string `json:"score"`
}

type Login struct {
   FirstName string `json:"firstname"`
   Password string `json:"password"`

}

type Quiz1 struct {
   ID uint `json:"id"`
   Question string `json:"question"`
   Option1 string `json:"o1"`
   Option2 string `json:"o2"`
   Option3 string `json:"o3"`
   Option4 string `json:"o4"`
   Answer string `json:"ans"`
}


type Quiz2 struct {
   ID uint `json:"id"`
   Question string `json:"question"`
   Option1 string `json:"o1"`
   Option2 string `json:"o2"`
   Option3 string `json:"o3"`
   Option4 string `json:"o4"`
   Answer string `json:"ans"`
}


type Quiz3 struct {
   ID uint `json:"id"`
   Question string `json:"question"`
   Option1 string `json:"o1"`
   Option2 string `json:"o2"`
   Option3 string `json:"o3"`
   Option4 string `json:"o4"`
   Answer string `json:"ans"`
}


type Quiz4 struct {
   ID uint `json:"id"`
   Question string `json:"question"`
   Option1 string `json:"o1"`
   Option2 string `json:"o2"`
   Option3 string `json:"o3"`
   Option4 string `json:"o4"`
   Answer string `json:"ans"`
}

type G1add struct {
    ID uint `json:"id"`
   Question1 string `json:"question1"`
   Answer1 string `json:"ans1"`
   Question2 string `json:"question2"`
   Answer2 string `json:"ans2"`
   Question3 string `json:"question3"`
   Answer3 string `json:"ans3"`
   Question4 string `json:"question4"`
   Answer4 string `json:"ans4"`
   Question5 string `json:"question5"`
   Answer5 string `json:"ans5"`
}

type G2add struct {
   ID uint `json:"id"`
   Question1 string `json:"question1"`
   Answer1 string `json:"ans1"`
   Question2 string `json:"question2"`
   Answer2 string `json:"ans2"`
   Question3 string `json:"question3"`
   Answer3 string `json:"ans3"`
   Question4 string `json:"question4"`
   Answer4 string `json:"ans4"`
   Question5 string `json:"question5"`
   Answer5 string `json:"ans5"`
}


func main() {
   db, err = gorm.Open("sqlite3", "./gorm.db")
   if err != nil {
      fmt.Println(err)
   }
   defer db.Close()

   db.AutoMigrate(&User{})
   db.AutoMigrate(&Quiz1{})
   db.AutoMigrate(&Quiz2{})
   db.AutoMigrate(&Quiz3{})
   db.AutoMigrate(&Quiz4{})
   db.AutoMigrate(&G1add{})
   db.AutoMigrate(&G2add{})
   db.AutoMigrate(&Login{})


   r := gin.Default()
   r.GET("/question1/", GetQuestion1)
   r.GET("/question1/:id", GetQuestions1)
   r.POST("/question1", CreateQuestion1)
   r.DELETE("/question1/:id", DeleteQuiz1)

   r.GET("/question2/", GetQuestion2)
   r.GET("/question2/:id", GetQuestions2)
   r.POST("/question2", CreateQuestion2)
   r.DELETE("/question2/:id", DeleteQuiz2)

   r.GET("/question3/", GetQuestion3)
   r.GET("/question3/:id", GetQuestions3)
   r.POST("/question3", CreateQuestion3)
   r.DELETE("/question3/:id", DeleteQuiz3)

   r.GET("/question4/", GetQuestion4)
   r.GET("/question4/:id", GetQuestions4)
   r.POST("/question4", CreateQuestion4)
   r.DELETE("/question4/:id", DeleteQuiz4)


   r.GET("/user/", GetUser)
   r.GET("/user/:id", GetUsers)
   r.POST("/user", CreateUser)
   r.DELETE("/user/:id", DeleteUser)

   r.GET("/g1/", GetG1)
   r.GET("/g1/:id", GetG1s)
   r.POST("/g1", CreateG1)
   r.DELETE("/g1/:id", DeleteG1)

   r.GET("/g2/", GetG2)
   r.GET("/g2/:id", GetG2s)
   r.POST("/g2", CreateG2)
   r.DELETE("/g2/:id", DeleteG2)


   r.Use((cors.Default()))
   r.Run(":8080")                                           // Run on port 8080
}



//----------------------------------------------


func DeleteQuiz1(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz1 Quiz1
   d := db.Where("id = ?", id).Delete(&quiz1)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateQuestion1(c *gin.Context) {
   var quiz1 Quiz1
   c.BindJSON(&quiz1)
   db.Create(&quiz1)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, quiz1)
   return
}

func GetQuestions1(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz1 Quiz1
   if err := db.Where("id = ?", id).First(&quiz1).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz1)
   }
}

func GetQuestion1(c *gin.Context) {
   var quiz1 []Quiz1
   if err := db.Find(&quiz1).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz1)
   }
}

//-----------------------------------------------


func DeleteQuiz2(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz2 Quiz2
   d := db.Where("id = ?", id).Delete(&quiz2)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateQuestion2(c *gin.Context) {
   var quiz2 Quiz2
   c.BindJSON(&quiz2)
   db.Create(&quiz2)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, quiz2)
   return
}

func GetQuestions2(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz2 Quiz2
   if err := db.Where("id = ?", id).First(&quiz2).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz2)
   }
}

func GetQuestion2(c *gin.Context) {
   var quiz2 []Quiz2
   if err := db.Find(&quiz2).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz2)
   }
}


//-------------------------------------------------------


func DeleteQuiz3(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz3 Quiz3
   d := db.Where("id = ?", id).Delete(&quiz3)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateQuestion3(c *gin.Context) {
   var quiz3 Quiz3
   c.BindJSON(&quiz3)
   db.Create(&quiz3)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, quiz3)
   return
}

func GetQuestions3(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz3 Quiz3
   if err := db.Where("id = ?", id).First(&quiz3).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz3)
   }
}

func GetQuestion3(c *gin.Context) {
   var quiz3 []Quiz3
   if err := db.Find(&quiz3).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz3)
   }
}

//------------------------------------------------


func DeleteQuiz4(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz4 Quiz4
   d := db.Where("id = ?", id).Delete(&quiz4)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateQuestion4(c *gin.Context) {
   var quiz4 Quiz4
   c.BindJSON(&quiz4)
   db.Create(&quiz4)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, quiz4)
   return
}

func GetQuestions4(c *gin.Context) {
   id := c.Params.ByName("id")
   var quiz4 Quiz4
   if err := db.Where("id = ?", id).First(&quiz4).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz4)
   }
}

func GetQuestion4(c *gin.Context) {
   var quiz4 []Quiz4
   if err := db.Find(&quiz4).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, quiz4)
   }
}

//---------------------------------------------------------------


func DeleteUser(c *gin.Context) {
   id := c.Params.ByName("id")
   var user User
   d := db.Where("id = ?", id).Delete(&user)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateUser(c *gin.Context) {
   var user User
   c.BindJSON(&user)
   db.Create(&user)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, user)
   return
}

func GetUsers(c *gin.Context) {
   id := c.Params.ByName("id")
   var user User
   if err := db.Where("id = ?", id).First(&user).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, user)
   }
}

func GetUser(c *gin.Context) {
   var user []User
   if err := db.Find(&user).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, user)
   }
}

//-------------------------------------------------------

func DeleteG1(c *gin.Context) {
   id := c.Params.ByName("id")
   var g1add G1add
   d := db.Where("id = ?", id).Delete(&g1add)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateG1(c *gin.Context) {
   var g1add G1add
   c.BindJSON(&g1add)
   db.Create(&g1add)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, g1add)
   return
}

func GetG1s(c *gin.Context) {
   id := c.Params.ByName("id")
   var g1add G1add
   if err := db.Where("id = ?", id).First(&g1add).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, g1add)
   }
}

func GetG1(c *gin.Context) {
   var g1add []G1add
   if err := db.Find(&g1add).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, g1add)
   }
}


//-----------------------------------------------------------------


func DeleteG2(c *gin.Context) {
   id := c.Params.ByName("id")
   var g2add G2add
   d := db.Where("id = ?", id).Delete(&g2add)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func CreateG2(c *gin.Context) {
   var g2add G2add
   c.BindJSON(&g2add)
   db.Create(&g2add)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, g2add)
   return
}

func GetG2s(c *gin.Context) {
   id := c.Params.ByName("id")
   var g2add G2add
   if err := db.Where("id = ?", id).First(&g2add).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, g2add)
   }
}

func GetG2(c *gin.Context) {
   var g2add []G2add
   if err := db.Find(&g2add).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, g2add)
   }
}

