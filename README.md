# MERN-Friend-List

----------------------------------------------------------------------------------



(SERVER) Friends.js / model

1. create Schema 
2. create model using Schema
3. export model

----------------------------------------------------------------------------------

(SERVER) index.js / controller

1. connect to mongodb --> mongoose.connect("mongodb://localhost:27017/MERNFriendList");
2. app.post("/addfriend" ...) is to add new friend to db --> by creating new FriendModel , and saving to db
3. app.get("/read" ...) get data from db , send data as a response to CLIENT
4. app.get("/update" ...) updates the data by its specific id
5. app.delete("/delete/:id"...) delete the data by its specific id using the params of the link --> dynamic id from "/delete/:id" 

----------------------------------------------------------------------------------

(CLIENT) / view

1. addFriend() uses axios to *post* 'name' & 'age' to SERVER
2. updateFriend() prompts a new age for update , uses axios to *put* data to SERVER
3. deleteFriend(id) uses axios to *delete* with '     axios.delete(`http://localhost:3001/delete/${id}`)       ' , so that SERVER can delete that id
4. useEffect uses axios to render the data at initial load

Rest of the file is just React components 





Written by Aloysius Tan on 6 May 2022


