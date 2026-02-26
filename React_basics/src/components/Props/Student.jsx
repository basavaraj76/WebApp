import style from "/src/components/Props/Student.module.css"
function Student(props){

    return(
        <>
            <div className={style.container}>
                <h3>Props components</h3>
                <p>Name : {props.name}</p>
                <p>Age : {props.age}</p>
                <p>Student : {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    );
}
export default Student