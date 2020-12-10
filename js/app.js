////////////////////////////////////////////////////////////////////////////////////////////////////
//SECTION 3 - COMMUNICATING WITH PROPS
////////////////////////////////////////////////////////////////////////////////////////////////////

//Component Nesting 
	//- a component can be shown INSIDE of another
//Component Reusability 
	//- We want to make components that can be easily reused throughout our application
//Component Configuration 
	//- We should be able to configure a component when its created


//Semantic UI - semantic-ui.com
	//open source css styling framework

	//To install
		//semantic ui cdn
			//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
			//place this link ^^^ inside the public html file, into our head tag

//We will we using the faker library to fake data so that our projects have something to render
	//to install lib, in terminal use following command: npm install --save faker
		//--save flag will save it into local project and will create new entry inside package.json file.
			//if ever try to install dependencies for our project again it will automatically install faker.

////////////////////////////////////////////////////////////////////////////////////////////////////
//To create a reusable series of components
	//Identify JSX that appears to be duplicated
	//What is the purpose of that JSX block?  Think of a descriptive name for what it does.
	//Create a new file to house this new component - it should have the same name as the component.
		//File each word in file name should be capitalized like so: CommentDetail.js (convention)
	//Create a new component into the new file, paste the JSX into it.
	//Make the new component configurable by using react's 'props' system.

////////////////////////////////////////////////////////////////////////////////////////////////////
//To make our new component usable we muse do 2 things:
	//Add an export statement at the bottom of the component: export default CommentDetail;
	//Add and import statement to the app: import CommentDetails from './CommentDetail';
		// --> "./" --> in SAME DIRECTORY
		// do not have to include.js in file name, webpack library automatically attempts to find files ending in .js
			//extension not needed so long as it is a .js file

////////////////////////////////////////////////////////////////////////////////////////////////////
//Component Hierarchy

						//App

//Comment Detail 		Comment Detail 			Comment Detail


//Props
	//System for passing data from a PARENT component to a CHILD(nested) component
	//Goal is to customize or configure a child component
		//customize --> show content on screen
		//configure --> react to user interaction

//App component will show instances of a comment detail
	//when app shows components, @ same time app will pass a little configuration (props) to each comment component
		//customize name, times, comment details, --> there is no limit to amount of information we can use in system.
			//however, this is an effective limit we'll use in practice that we'll go over later.

////////////////////////////////////////////////////////////////////////////////////////////////////
//PROPS (PROPERTIES)
	//A child CANNOT pass data back up to the parent (although we can do this indirectly)
	//SYSTEM IS GENERALLY FOR PASSING INFORMATION DOWN from parents to children
		//2 stages
			//1 Provide info from parent to child
			//2 CHILD CONSUMES or makes use of information

//Step 1, PROVIDING THE INFORMATION
	//Syntax: <CommentDetail author="Sam" />
		//can name prop whatever you want, can be person, name, nameofauthor, personwhowrotethis, etc.
		//"Sam" is hardcoded, in the future we will reference a js varaible like so {Sam}

//Step 2, CONSUMING THE INFORMATION
	//Syntax: const CommentDetail = (props) => {}; or const CommentDetail = props => {}; in the component
	//Syntax: {props.author} in <a><a/> tag instead of hardcoding names

////////////////////////////////////////////////////////////////////////////////////////////////////
//Passing Multiple Props
	//Take a shot at providing the comments as a prop
	//Try passing the image avatar as a prop also

////////////////////////////////////////////////////////////////////////////////////////////////////
//We will wrap all comments inside of this approve / reject dialogue box (common for blog sites)
	//see diagrams approve_reject

	//With ApprovalCard we are not going to hard code it to show an instance of comment detail...
		///BECAUSE if we were building an app w/ approve/reject, it's possible that we want to reuse this
		//approvalcard component without the comment detail being shown
			//we want to be able to show the comment detail while also having the ability to swap out content

	//We have created an ApprovalCard component using semantic UI as a guide
	//Next we will figure out how to get our comment detail inside of the components

////////////////////////////////////////////////////////////////////////////////////////////////////
//We want the approval card to show comment detail without hardcoding the values
	//This will enable us to reuse to component with customizable content according to our needs
		//This is accomplished with props

	//Syntax: 
		//<ApprovalCard>
			//<CommentDetail/>
		//</ApprovalCard>
		//When we pass one component to another using this syntax ^^^ the child component (CommentDetail)
		//will show up inside the ApprovalCard on the props object, on the "children" property

	//To make truly reusable components (show some custom content inside a component)
		//Take the child
		//Wrap it in a parent component
		//That CHILD component will show up inside of a child on the props.children property
		//We can then take that props.children property and reference it anywhere inside of our JSX

	//Try to take CommentDetail comp wrap it in ApprovalCard to show the other instances of comment detail
			//IN ORDER FOR THIS TO WORK IN APPROVALCARD WE MUST REFERENCE {props.children}

////////////////////////////////////////////////////////////////////////////////////////////////////
	//Exercise, add to name properties to the message --> done in <2 minutes.