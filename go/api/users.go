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
	users := []User{
        {Id: 1, Name: "John"},
        {Id: 2, Name: "Jane"},
        {Id: 3, Name: "Bob"},
    }
    jsonData, _ := json.Marshal(users)
    
	w.Header().Set("Content-Type", "application/json")
    w.Write(jsonData)
}
