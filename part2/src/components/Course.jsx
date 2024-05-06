const Course = ({ courses }) => {
    let total = {}
    courses.map(course => (
      total[course.id]= course.parts.reduce((exercise, part) => exercise += part.exercises, 0)
    )) 
      
    return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map(part => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
        <p><b>total of {total[course.id]} exercises</b></p>
        </div>
        ))}
    </div>
    )
  }

export default Course