import { createRoot } from 'react-dom/client';
import './index.css';
import StudentStatus from './components/base/StudentStatus';
import productList from './data/product-list';
import Fragment from './components/base/Fragment';
import Juke from './components/base/ComponentArrowFunction';
import Random from './components/base/Random';
import Card from './components/layout/Card';
import { Theme } from './context/theme';
import { useState } from 'react';
import ProductList from './components/loop/ProductList';


const studentList = [
    {
        name: 'Brad',
        grade: 6
    },
    {
        name: 'Alonso',
        grade: 5
    },
    {
        name: 'John',
        grade: 4
    },
    {
        name: 'Peter',
        grade: 1
    }
]


export default function App(props) {

    const [color, setColor] = useState('#000')

    function generateRandomHexColor() {
        const colorList = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
        let finalColor = '#';
        for(let i = 0; i<6;i++) {
            finalColor += colorList[Number((Math.random() * ((colorList.length - 1)-0) + 0).toFixed())]
        }
        setColor(finalColor);
    }

    return  <main>
        <Theme.Provider value={color}>
            <section class="tutorialContent">
                <Card title="Random Challenge">
                    <Random max="10" min="7"/>
                    <Random max="10" min="1"/>
                </Card>
                <Card title="Students Status">
                    {studentList.map(student => <StudentStatus name={student.name} grade={student.grade}/>)}
                </Card>
                <Card title="Fragments">
                    <Fragment />
                </Card>
                <Card title="Component Arrow Function">
                    <Juke />
                </Card>
                <Card title="Product List Component">
                    <ProductList list={productList}/>
                </Card>
            </section>
                <hr />
            <button onClick={() => generateRandomHexColor()}>
                Change Color
            </button>
        </Theme.Provider>
    </main>
}