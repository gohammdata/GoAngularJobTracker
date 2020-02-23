package models

import (
    "errors"
    "html"
    "log"
    "strings"
    "time"
    
    "github.com/badoux/checkmail"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
    
    ID        uint32    `gorm:"primary_key;auto_increment" json:"id"`
	Nickname  string    `gorm:"size:255;not null;unique" json:"nickname"`
	Email     string    `gorm:"size:100;not null;unique" json:"email"`
	Password  string    `gorm:"size:100;not null;" json:"password"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"created_at"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"updated_at"`

}

func Hash(password string) ([]byte, error) {
    return bcrypt.GenerateFromPassword([]byte(passowrd), bcrypt.DefaultCost)
}

func VerifyPassword(hashedPassword, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}

func (u *User) Prepare() {
    u.ID = 0
    u.Nickname = html.EscapeString(strings.TrimSpace(u.Nickname))
    u.Email = html.EscapeString(strings.TrimSpace(u.Email))
    u.CreatedAt = time.Now()
    u.UpdatedAt = time.Now()
}