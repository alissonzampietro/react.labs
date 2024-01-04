function StudentStatus(params) {
    let gradeStatus = params.grade > 5 ? 'passed' : 'disapproved';
    return <ul>
            <li><b>Name</b>: {params.name}</li>
            <li className={gradeStatus}><b>Grade</b>: {params.grade}</li>
            <li><b>Status</b>: <b className={gradeStatus}>{gradeStatus.toUpperCase()}</b></li>
        </ul>
}

export default StudentStatus;