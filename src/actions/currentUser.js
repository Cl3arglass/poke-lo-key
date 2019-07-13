//synchronous
export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		user: user
	}
}

//async
export const login = credentials => {
       return dispatch => {
       	return fetch("http://localhost:3001/api/login", {
       		method: "POST",
       		headers: {
       			"Content-Type": "application/json"
       		},
       		body: JSON.stringify(credentials)
       })
       	.then(result => result.json())
       	.then(userJSON => {
         if (userJSON.error) {
            alert(userJSON.error)
         } else {
            dispatch(setCurrentUser(userJSON))
            localStorage.setItem('token', userJSON.jwt)
         }
       })
       .catch(console.log)
	}
	// event.preventDefault()

 //    const userInfo = this.state.loginForm
 //    const headers = {
 //      method: "POST",
 //      headers: {
 //        "Content-Type": "application/json"
 //      },
 //      body: JSON.stringify({
 //        user: userInfo 
 //      })
 //    }

 //    fetch("http://localhost:3001/api/login", headers)
 //       .then(result => result.json())
 //       .then(userJSON => {
 //         if (userJSON.error) {
 //            alert(userJSON.error)
 //         } else {
 //            this.setState({
 //              currentUser: userJSON.user, 
 //              loginForm: {
 //                email: "",
 //                password: ""
 //              }
 //            })
 //            localStorage.setItem('token', userJSON.jwt)
 //         }
 //       })
 //       .catch(console.log)
}


// const token = localStorage.getItem("token")
    // if (token) {
    //   fetch("http://localhost:3001/api/get_current_user", {
    //     headers: {
    //       "Authorization": token
    //     }
    //   })
    //   .then(result => result.json())
    //     .then(response => {
    //       if (response.error) {
    //         alert(response.error) 
    //       } else {
    //         this.setState({
    //           currentUser: response.user
    //         })
    //       }
    //     })
    //     .catch(console.log)
    // }

export const getCurrentUser = () => {
	const token = localStorage.getItem("token")
	if (token) {
       return dispatch => {
       	return fetch("http://localhost:3001/api/get_current_user", {
       		method: "GET",
       		headers: {
       			"Authorization": token
       		},
       })
       	.then(result => result.json())
       	.then(userJSON => {
         if (userJSON.error) {
            alert(userJSON.error)
         } else {
            dispatch(setCurrentUser(userJSON.user))
            // localStorage.setItem('token', userJSON.jwt)
         }
       })
       .catch(console.log)
	}
  }
}