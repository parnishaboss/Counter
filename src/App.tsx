import React, {useState} from 'react';
import './App.css';
import {Button, Paper} from '@mui/material';

function App() {
    const [count, setCount] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const AddHandler = () => {
        if (count === 5) {
            setError('"Stop, please stop. . ."')
        } else {
            setCount(count + 1);
            setError('')
        }
    }
    const MinusHandler = () => {
        if (count === 0) {
            setError("Сannot be lower than 0 ");
        } else {
            setCount(count - 1);
            setError('')
        }
    }
    const ResetHandler = () => {
        if (count === 0) {
            setError("Has already 0");
        } else {
            setCount(0);
            setError('')
        }
    }
    return (
        <div className="App">
                <Paper className='Body' elevation={12}>
                    <div>
                        <Paper elevation={6}>
                            <span className='counter'>{count}</span>
                        </Paper>
                        {error && <div className="error-message">{error}</div>}
                        <div className='ButtonGroup'>
                            <Paper>
                                <Button onClick={AddHandler} variant="outlined" color="success">+</Button>
                            </Paper>
                            <Paper>
                                <Button onClick={MinusHandler} variant="contained" color="secondary">-</Button>
                            </Paper>
                            <Paper>
                                <Button onClick={ResetHandler} variant="outlined" color="error">reset</Button>
                            </Paper>
                        </div>
                    </div>
                </Paper>
        </div>
    );
}

export default App;
