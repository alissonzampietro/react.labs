import { createRoot } from 'react-dom/client';
import './index.css';
import StudentStatus from './components/base/StudentStatus';
import Fragment from './components/base/Fragment';
import Juke from './components/base/ComponentArrowFunction';
import Random from './components/base/Random';
import Card from './components/layout/Card';

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
    return  <main>
        <Card title="Random Challenge">
            <Random max="10" min="7"/>
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
    </main>
}