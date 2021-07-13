const myPlugins = {
    install(Vue){
        Vue.mixin({
            methods: {
                errorHandler(errorValue){
                    if(errorValue.response != undefined){
                        if(errorValue.response.data.error == "Unauthorized"){
                            this.removeCookies("userid")
                            this.removeCookies("first")
                            this.removeCookies("last")
                            this.removeCookies("email")
                            this.removeCookies("language")
                            this.removeCookies("approver")
                            localStorage.removeItem('okuy341')
                            location.reload()
                        }
                    }
                    console.log(errorValue)
                },
            },
        })
    }
}
export default myPlugins
