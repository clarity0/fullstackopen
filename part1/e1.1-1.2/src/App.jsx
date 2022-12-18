const Header = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  )
}

const Content = ({course_data}) => {
  return (
    <div>
      <Part title={course_data[0].title} exercise_count={course_data[0].exercise_count}/>
      <Part title={course_data[1].title} exercise_count={course_data[1].exercise_count}/>
      <Part title={course_data[2].title} exercise_count={course_data[2].exercise_count}/>
    </div>
  )
}

const Part = ({title, exercise_count}) => {
  return(
    <p>
      {title} {exercise_count}
    </p>
  )
}

const Total = ({total}) => {
  return(
    <p>
      {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercise_total = exercises1 + exercises2 + exercises3

  const course_data = [
    { id: 1,
      title: part1,
      exercise_count: exercises1
    },
    { id: 2,
      title: part2,
      exercise_count: exercises2
    },
    { id: 3,
      title: part3,
      exercise_count: exercises3
    },
  ]

  return (
    <div>
      <Header text={course}/>
      <Content course_data={course_data}/>
      <Total total={exercise_total}/>
    </div>
  )
}

export default App