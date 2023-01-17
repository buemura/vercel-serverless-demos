package api

import (
	"encoding/json"
	"net/http"
)

type User struct {
	Id int64 `json:"id"`
	Name string `json:"name"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	user := &User{Id: 1, Name: "John Doe"}
    jsonData, _ := json.Marshal(user)
    
	w.Header().Set("Content-Type", "application/json")
    w.Write(jsonData)
}
