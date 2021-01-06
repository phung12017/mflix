export default async function  (req, res) {
   
   

    if (req.method === 'POST') {
      // Process a POST request
      const {email,password} = req.body
      res.send({
        message:'method post',
        email:email,
        password:password
      })
    } else {
      // Handle any other HTTP method
      res.send({
        message:'ở đây chúng tôi chỉ add = POST'
    })    
    }
  }
  