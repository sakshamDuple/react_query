import { useEffect, useState } from 'react';
import axios from 'axios';
import { Superhero } from '../model/interface';

function TradSupePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Superhero[]>([]);
    const [error, setError] = useState<string>('')
    useEffect(() => {
        axios.get('https://6219cf0581d4074e85b1f64b.mockapi.io/students').then((res) => {
            setData(res.data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message)
            setIsLoading(false)
        });
    }, []);
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <>
            <h2>Traditional Way</h2>
            {data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>;
            })}
        </>
    );
}

export default TradSupePage;