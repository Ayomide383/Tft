require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Demo templates API
app.get('/api/templates', (req,res)=>{
  const templates = Array.from({length:10}).map((_,i)=>({
    id:`t${i+1}`,
    title:`Template #${i+1}`,
    type: i%2===0?'Portfolio':'Agency',
    price: 20+i*5,
    img:`https://picsum.photos/seed/template${i}/400/250`
  }));
  res.json(templates);
});

// Demo auth endpoints (return fake token)
app.post('/api/login',(req,res)=>{
  res.json({token:'demo-token',user:{email:req.body.email,name:'Demo User'}});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log('Backend running on',PORT));
