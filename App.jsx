import React, {useState} from 'react';
export default function App(){
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
      <header style={{padding:10,display:'flex',justifyContent:'space-between'}}>
        <h1>TFA Templates Pro</h1>
        <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Switch Theme</button>
      </header>
      <main style={{padding:10}}>
        <h2>Live Preview Slider (10 Templates)</h2>
        <div style={{display:'flex',overflowX:'auto',gap:10}}>
          {Array.from({length:10}).map((_,i)=>(
            <div key={i} style={{minWidth:200,border:'1px solid gray',padding:5,borderRadius:5}}>
              <img src={`https://picsum.photos/seed/template${i}/200/120`} alt="" style={{width:'100%'}}/>
              <p>Template #{i+1}</p>
              <button style={{marginTop:5}}>Preview</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
