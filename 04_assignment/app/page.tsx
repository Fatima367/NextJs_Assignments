import Card from "./components/card";

/* Assignment 4

-Create a Student ID Card component for three students. 
-Use props to pass the students’ data, such as name, age, Roll number, and Class, into
the component. 
-Style each card using Tailwind CSS to ensure a clean, modern, and fully responsive design.
*/

export default function Home() {

  return (
    <div>
      
      <div className="flex flex-wrap gap-12 mt-10 ml-12 mr-8 mb-8">
    <Card name="Fatima" rollno={587698} day="Monday 2-5"/>
    <Card name="SomeoneElse" rollno={465760} day="Tuesday 2-5"/>
    <Card name="AnotherStudent" rollno={707768} day="Friday 7-10"/>
     </div>
    </div>
  );
}
