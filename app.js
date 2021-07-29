const express = require('express');
const morgan = require('morgan');

const app = express();

//1)Middlewares
app.use(morgan('dev'));
app.use(express.json());

//2)Route Hadlers
 const getAllTours= (req,res)=>{
    res.status(200).json({ 
        status:'success',
        result:1,
        data:{
          tours:{
            name: "The Sea Explorer",
            duration: 7,
            maxGroupSize: 15,
            difficulty: "medium",
            price: 497,
            summary: "Exploring the jaw-dropping US east coast by foot and by boat",
            description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            imageCover: "tour-2-cover.jpg",
          }  
        } 
    });
};

const getTour = (req,res)=>{
    console.log("par..",req.params);
    //const id = req.params.id*1 converst to number
    //const tour = tours.find(els=> el.id===id)
    /* if(!tour){ //undefined
        return res.status(404).json({
            status:'fail,
            message:'Invalid Id'
        })
    */
    res.status(200).json({ 
        status:'success',
    });
}

const newTour =(req,res)=>{
    console.log("req.body",req.body);
    res.status(200).send('Done');
}

const updateTour = (req,res)=>{
    res.status(200).json({ 
        status:'success',
        data:{
            tour:'Updated tour'
        }
    });
}

const deleteTour = (req,res)=>{
    //no contents dont send a data back
    res.status(204).json({ 
        status:'success',
        data:null
    });
}

const getAllUsers= (req,res)=>{
    res.status(500).json({ 
        status:'error',
        message:'this route is not yet defined',
    });
};
const getUser= (req,res)=>{
    res.status(500).json({ 
        status:'error',
        message:'this route is not yet defined',
    });
};
const newUser= (req,res)=>{
    res.status(500).json({ 
        status:'error',
        message:'this route is not yet defined',
    });
};
const updateUser= (req,res)=>{
    res.status(500).json({ 
        status:'error',
        message:'this route is not yet defined',
    });
};
const deleteUser= (req,res)=>{
    res.status(500).json({ 
        status:'error',
        message:'this route is not yet defined',
    });
};
//app.get('/api/v1/tours',getAllTours) 
//app.get('/api/v1/tours/:id', getTour) 
//app.patch('/api/v1/tours/:id', updateTour); 
//app.delete('/api/v1/tours/:id', deleteTour); 
//app.post('/api/v1/tours', newTour)

//3)Routes
const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/')
    .get(getAllTours)
    .post(newTour);

tourRouter.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

userRouter.route('/')
    .get(getAllUsers)
    .post(newUser);

userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

app.get('/', (req,res)=>{
    res.status(200).json({message:'hello from!'});
})

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4) Start Server
const port =3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
})