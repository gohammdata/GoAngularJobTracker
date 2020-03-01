package controllers

import (
	"net/http"

	"github.com/gohammdata/GoAngularJobTracker/BackEnd/api/responses"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
	responses.JSON(w, http.StatusOK, "Welcome to the Alpha Version of this Go RESTful API")

}