const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Habit = require('./models/habits');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use(function(req,res,next)
 { 
     req.body.todays_status=null;
     req.body.last_day_1=null;
     req.body.last_day_2=null;
     req.body.last_day_3=null;
     req.body.last_day_4=null;
     req.body.last_day_5=null;
     req.body.last_day_6=null;

     
    next();
 });

// var habitList = [
//           {
//             name:"Gyming",
//             time:"8:00 am",
//             duration:"2",
//             todays_status:false,
//             last_day_1:false,
//             last_day_2:false,
//             last_day_3:false,
//             last_day_4:false,
//             last_day_5:false,
//             last_day_6:true,
               
//           },
//           {
//             name:"Gyming",
//             time:"8:00 am",
//             duration:"2",
//             todays_status:false,
//             last_day_1:false,
//             last_day_2:false,
//             last_day_3:false,
//             last_day_4:false,
//             last_day_5:false,
//             last_day_6:false,
            
//           },
//           {
//             name:"Gyming",
//             time:"8:00 am",
//             duration:"2",
//             todays_status:null,
//             last_day_1:false,
//             last_day_2:false,
//             last_day_3:false,
//             last_day_4:false,
//             last_day_5:false,
//             last_day_6:false,
                       
    
//           },

//           {
//             name:"Gyming",
//             time:"8:00 am",
//             duration:"2",
//             todays_status:null,
//             last_day_1:false,
//             last_day_2:false,
//             last_day_3:false,
//             last_day_4:false,
//             last_day_5:false,
//             last_day_6:false,
                       
    
//           }

    
//     ];

app.get('/',function(req,res){

    // return res.render('home',{
    //     title:"My habits",
    //     habit_list: habitList
    
    // });

    Habit.find({},function(err,habits){
        if(err)
        {
            console.log('error in fetching the contact from the db');
            return;
        }
         
        return res.render('home',{
            title:"My habits",
            habit_list: habits
        });

    });
   
});

app.get('/weekly',function(req,res){
   
    Habit.find({},function(err,habits){
        if(err)
        {
            console.log('error in fetching the contact from the db');
            return;
        }
         
        return res.render('weekly',{
            title:"weekly habit tracer",
            habit_list: habits
        
        });

    });
   
   
   
});

app.get('/update-status',function(req,res){
   
    console.log(req.query);
    let id= req.query.id;
    let value = req.query.val;
    let status = req.query.status;

    switch(value)
    {
        case '0':
            //today,s status
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{today:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{today:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{today:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        case '1':
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay1:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay1:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay1:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        case '2':
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay2:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay2:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay2:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        case '3':
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay3:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay3:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay3:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        case '4': 
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay4:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay4:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay4:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        case '5': 
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay5:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay5:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay5:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;

        default :
            if(status=='done')
            {
                Habit.findByIdAndUpdate(id,{lastDay6:true},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else if(status=='notdone')
            {
                Habit.findByIdAndUpdate(id,{lastDay6:false},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
            }
            else
             {
                Habit.findByIdAndUpdate(id,{lastDay6:null},function(err){
                    if(err)
                    {
                        console.log('error in fetching the contact from the db');
                        return;
                    }
            
                    return res.redirect('back');
            
                });
             }
            break;
        
    }
    
   
   
   
});



app.get('/task-check',function(req,res){

    let id = req.query.id;
    //console.log(id);
    //console.log(typeof(id));

    Habit.findByIdAndUpdate(id,{today:true},function(err){
        if(err)
        {
            console.log('error in fetching the contact from the db');
            return;
        }

        return res.redirect('back');

    });
});

app.get('/delete-habit',function(req,res){

    let id = req.query.id;
    Habit.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log('error in deleting object in database');
            return;
        }

       return res.redirect('back');
    });
});

app.post('/create-habit',function(req,res){
//    console.log(req.body);
//    console.log(req.body.name);
//    console.log(req.body.time);
//    console.log(req.body.duration);
    //   habitList.push(req.body);

    Habit.create({
       
        name: req.body.name,
        time: req.body.time,
        duration: req.body.duration,
        today: req.body.todays_status,
        lastDay1: req.body.last_day_1,
        lastDay2: req.body.last_day_2,
        lastDay3: req.body.last_day_3,
        lastDay4: req.body.last_day_4,
        lastDay5: req.body.last_day_5,
        lastDay6: req.body.last_day_6



    },function(err,newHabit){
        if(err)
        {
            console.log('error in creating contact');
            return ;
        }

        console.log('***********',newHabit);
        
        res.redirect('back');
    });

      

});
    

app.listen(port,function(err){
  
    if(err)
    {
        console.log('Error in running the server', err);
        return;
    }
    
    console.log("Yup! My Express server is up and running on Port:",port);

});