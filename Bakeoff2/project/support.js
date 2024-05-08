// Support variables & functions (DO NOT CHANGE!)

let student_ID_form, display_size_form, start_button;                  // Initial input variables
let student_ID, display_size;                                          // User input parameters

let disclaimerTitle, disclaimer, disclaimer2,disclaimer3, disclaimer4;

// Prints the initial UI that prompts that ask for student ID and screen size
function drawUserIDScreen()
{ 
  background(color(0,0,0));                                          // sets background to black
  
  // Text prompt
  main_text = createDiv("Insert your student number and display size");
  main_text.id('main_text');
  main_text.position(10, 10);
  
  // Input forms:
  // 1. Student ID
  let student_ID_pos_y_offset = main_text.size().height + 40;         // y offset from previous item
  
  student_ID_form = createInput('');                                 // create input field
  student_ID_form.position(200, student_ID_pos_y_offset);
  
  student_ID_label = createDiv("Student number (int)");              // create label
  student_ID_label.id('input');
  student_ID_label.position(10, student_ID_pos_y_offset);
  
  // 2. Display size
  let display_size_pos_y_offset = student_ID_pos_y_offset + student_ID_form.size().height + 20;
  
  display_size_form = createInput('');                              // create input field
  display_size_form.position(200, display_size_pos_y_offset);
  
  display_size_label = createDiv("Display size in inches");         // create label
  display_size_label.id('input');
  display_size_label.position(10, display_size_pos_y_offset);
  
  // Disclaimer Title
  let titleText = "Disclaimer";
  disclaimerTitle = createDiv(titleText);
  disclaimerTitle.id('disclaimerTitle');
  let title_pos_y_offset = display_size_pos_y_offset + display_size_form.size().height + 20;
  disclaimerTitle.position(10, title_pos_y_offset);
  disclaimerTitle.style('color', 'white');
  disclaimerTitle.style('font-weight', 'bold');
  disclaimerTitle.style('font-size', '24px');

  
  // Calculate new offset for the disclaimer based on the last element
  let disclaimer_pos_y_offset = disclaimerTitle.position().y + disclaimerTitle.size().height + 10; // Adjust the 20 to increase or decrease spacing as needed

  let disclaimerText = "Está organizado por ordem alfabetica e por grupos das primeiras duas letras de cada palavra";
  // Positioning the disclaimer
  disclaimer = createDiv(disclaimerText);
  disclaimer.id('disclaimer');
  disclaimer.position(10, disclaimer_pos_y_offset); // Using the new offset for the `y` position
  disclaimer.style('color', 'white'); // set text color to white
  
    let disclaimer2Text = "As palavras de cada um destes grupos só estão visíveis quando o cursor do rato estiver na área";
  disclaimer2 = createDiv(disclaimer2Text);
  disclaimer2.id('disclaimer2');
  // Calculate y offset based on the position of the first disclaimer
  let disclaimer2_pos_y_offset = disclaimer.position().y + disclaimer.size().height + 10;
  disclaimer2.position(10, disclaimer2_pos_y_offset);
  disclaimer2.style('color', 'white');
  
    // Third disclaimer setup
  let disclaimer3Text = "de um dos elementos desse grupo";
  disclaimer3 = createDiv(disclaimer3Text);
  disclaimer3.id('disclaimer3');
  let disclaimer3_pos_y_offset = disclaimer2.position().y + disclaimer2.size().height + 10;
  disclaimer3.position(10, disclaimer3_pos_y_offset);
  disclaimer3.style('color', 'white');

  // Fourth disclaimer setup
  let disclaimer4Text = "O tempo só começa a contar depois do primeiro clique";
  disclaimer4 = createDiv(disclaimer4Text);
  disclaimer4.id('disclaimer4');
  let disclaimer4_pos_y_offset = disclaimer3.position().y + disclaimer3.size().height + 10;
  disclaimer4.position(10, disclaimer4_pos_y_offset);
  disclaimer4.style('color', 'white');
  
  
  // 3. Start button
  start_button = createButton('START');
  start_button.mouseReleased(startTest);
  start_button.position(width/2 - start_button.size().width/2, disclaimer4.position().y + disclaimer4.size().height + 20);
}

// Verifies if the student ID is a number, and within an acceptable range
function validID()
{
  if(parseInt(student_ID_form.value()) < 200000 && parseInt(student_ID_form.value()) > 1000) return true
  else 
  {
    alert("Please insert a valid student number (integer between 1000 and 200000)");
	return false;
  }
}

// Verifies if the display size is a number, and within an acceptable range (>13")
function validSize()
{
  if (parseInt(display_size_form.value()) < 50 && parseInt(display_size_form.value()) >= 13) return true
  else
  {
    alert("Please insert a valid display size (between 13 and 50)");
    return false;
  }
}

// Starts the test (i.e., target selection task)
function startTest()
{
  if (validID() && validSize())
  {
    // Saves student and display information
    student_ID = parseInt(student_ID_form.value());
    display_size = parseInt(display_size_form.value());

    // Deletes UI elements
    main_text.remove();
    student_ID_form.remove();
    student_ID_label.remove();
    display_size_form.remove();
    display_size_label.remove();
    start_button.remove();  
    disclaimerTitle.remove();
    disclaimer.remove();
    disclaimer2.remove();
    disclaimer3.remove();
    disclaimer4.remove();

    // Goes fullscreen and starts test
    fullscreen(!fullscreen());
  }
}

// Randomize the order in the targets to be selected
function randomizeTrials()
{
  trials = [];      // Empties the array
    
  // Creates an array with random items from the "legendas" CSV
  for (var i = 0; i < NUM_OF_TRIALS; i++) trials.push(floor(random(legendas.getRowCount())));

  print("trial order: " + trials);   // prints trial order - for debug purposes
}