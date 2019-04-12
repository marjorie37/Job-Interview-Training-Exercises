
    // Constant non-constance Does the fact that account is constant mean that we can't update password? Why, or why not? And if not, how could we make it so that we can't?

"use strict"; //pour obtenir un message d'erreur en plus de la non mise à jour de la propriété

    const account = Object.freeze({
      username: "marijn",
      password: "xyzzy"
    })
    
    
    account.password = "s3cret" // (*much* more secure)
    
    console.log(account.password)