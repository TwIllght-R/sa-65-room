package main

import (
	"github.com/TwIllght-R/sa-65-example/controller"

	"github.com/TwIllght-R/sa-65-example/entity"

	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {

	return func(c *gin.Context) {

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")

		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {

			c.AbortWithStatus(204)

			return

		}

		c.Next()

	}

}

func main() {

	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())
	// User Routes

	// r.GET("/users", controller.ListUsers)

	// r.GET("/user/:id", controller.GetUser)

	// r.POST("/users", controller.CreateUser)

	// r.PATCH("/users", controller.UpdateUser)

	// r.DELETE("/users/:id", controller.DeleteUser)
	/////
	r.GET("/Room_types", controller.ListRoom_types)
	r.GET("/Room_type/:id", controller.GetRoom_type)
	r.POST("/Room_types", controller.CreateRoom_type)
	r.PATCH("/Room_types", controller.UpdateRoom_type)
	r.DELETE("/Room_types/:id", controller.DeleteRoom_type)
	////
	r.GET("/Room_prices", controller.ListRoom_prices)
	r.GET("/Room_price/:id", controller.GetRoom_price)
	r.POST("/Room_prices", controller.CreateRoom_price)
	r.PATCH("/Room_prices", controller.UpdateRoom_price)
	r.DELETE("/Room_prices/:id", controller.DeleteRoom_price)
	////
	r.GET("/Set_of_furnitures", controller.ListSet_of_furnitures)
	r.GET("/Set_of_furniture/:id", controller.GetSet_of_furniture)
	r.POST("/Set_of_furnitures", controller.CreateSet_of_furniture)
	r.PATCH("/Set_of_furnitures", controller.UpdateSet_of_furniture)
	r.DELETE("/Set_of_furnitures/:id", controller.DeleteSet_of_furniture)
	////
	r.GET("/Rooms", controller.ListRoom)
	r.GET("/Room/:id", controller.GetRoom)
	r.POST("/Rooms", controller.CreateRoom)
	r.PATCH("/Rooms", controller.UpdateRoom)
	r.DELETE("/Rooms/:id", controller.DeleteRoom)

	r.GET("/Furnitures", controller.ListFurniture)
	r.GET("/Furniture/:id", controller.GetFurniture)
	r.POST("/Furnitures", controller.CreateFurniture)
	r.PATCH("/Furnitures", controller.UpdateFurniture)
	r.DELETE("/Furnitures/:id", controller.DeleteFurniture)
	// Run the server
	r.POST("/signup1", controller.CreateLoginEmployee)
	// login User Route
	r.POST("/login", controller.Login)

	r.Run()

}
