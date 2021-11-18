var admin = connect('mongodb://127.0.0.1:7777/admin')
admin.createUser({user:'root',pwd:'Gzhwt63659106',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})
var myapp = connect('mongodb://127.0.0.1:7777/myapp')
myapp.createUser({user:'dev',pwd:'1q2w3e4r',roles:[{role:'readWrite',db:'myapp'}]})