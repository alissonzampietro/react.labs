import { createRoot } from 'react-dom/client';
import './index.css';
import StudentStatus from './components/base/StudentStatus';
import Fragment from './components/base/Fragment';
import Juke from './components/base/ComponentArrowFunction';

const root = createRoot(document.getElementById('root'));

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
root.render(
    <main>
        <div>
            <h2>Student Status</h2>
            {studentList.map(student => <StudentStatus name={student.name} grade={student.grade}/>)}
        </div>
        <div>
            <h2>New fragment</h2>
            <Fragment />
            <Juke />
        </div>
    </main>
);  