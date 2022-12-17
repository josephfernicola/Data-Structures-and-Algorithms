import java.util.*;

public class Main {
    public static void main (String [] args) {
        //2D array of states and their capitals
        //ordered alphabetically by state name initially
        // Row 0 is States, Row 1 is Capitals, each column is a match
        String[][] capitals = {
                {"Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"},
                {"Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"}
        };
      
        // Initialize scanner
        Scanner scanner = new Scanner(System.in);
      
        // First, prompt user to enter a U.S. state capital
        //This will respond with whether their guess was correct or not
        System.out.println("Please enter capital for a U.S. state:");
        String userInput = scanner.nextLine();
        // Boolean variable for keeping track if user guessed correctly
        boolean foundMatch = false;
        //  Create a sub array of only capitals to check if the user input is a valid capital city
        String[] cities = capitals[1];
        // Iterate through to see if there is a match to the user input. This is not case-sensitive
      for (int i = 0; i < cities.length; i++) {
        if (cities[i].equalsIgnoreCase(userInput)) {
            System.out.println("Correct! " + userInput + " is a U.S. state capital.");
          foundMatch = true;
          break;
        }
      }
        // If no match, notify that guess was wrong
      if (!foundMatch) {
            System.out.println("Incorrect. " + userInput + " is not a U.S. state capital.");
      }
      
        // Print out the 2D array of states and capitals, sorted by state
        System.out.println("Here is the list of all U.S. states and their respective capital cities");
      System.out.println("-------------------------------------------------------");
      
        // For loop to print the state and capital
        for (int i = 0; i < 50; i++) {
            System.out.println("The capital of " + capitals[0][i] + " is " + capitals[1][i] + ".");
        }
System.out.println("-------------------------------------------------------");
      
        // Bubble sort to now order the 2D array by capital

        // Iterate through two nested for loops to compare a value to the next adjacent value. Swap if the adjacent value is lower
        for (int i = 0; i < capitals[0].length; i++) {
            for (int j = i + 1; j < capitals[0].length; j++) {
                // Temporary city and state variables for each loop iteration
                String temporaryCity;
                String temporaryState;
          
          // If next capital is less than current capital, they need to be swapped (Bubble Sort)
                if (capitals[1][j].compareTo(capitals[1][i]) < 0) {

                  //Place current capital into temporary city variable
                    temporaryCity = capitals[1][i];
                  // reassign next capital to current capital
                    capitals[1][i] = capitals[1][j];
                  //reassign temp value (which was previously current capital) to next capital. This will allow it to continue moving through the array for comparisons
                    capitals[1][j] = temporaryCity;
                  
                    // Bubble sort of states using same procedure, in order to maintain the pairs of city/state
                    temporaryState = capitals[0][j];
                    capitals[0][j] = capitals[0][i];
                    capitals[0][i] = temporaryState;
                }
            }
        }
        // Prompt user to enter all state capitals
        System.out.println("Please enter all the state capitals. The amount of correct responses will be recorded. Hit enter between capitals.");
      System.out.println("-------------------------------------------------------");
        System.out.println("After listing all capitals, enter 'exit'.");
        // Boolean variable for next while loop for listing all of the capitals
        boolean breakOutOfLoop = false;
        Scanner allCapitalsScanner = new Scanner(System.in);
      
      //Array List to store all capitals that user enters
        ArrayList<String> capitalsGuessList = new ArrayList<>();

      //If the user has not entered 'exit', then store their response in ther ArrayList
      //This will be verified after to check if it is a correct capital
        while (!breakOutOfLoop) {
            String currentInput = allCapitalsScanner.nextLine();
            if (currentInput.equalsIgnoreCase("exit")) {
                breakOutOfLoop = true;
            }
            else {
                capitalsGuessList.add(currentInput);
            }
        }

        // Counter integer for number of correct guesses
        int correctAnswers = 0;
      
  //Check each guess in the arrayList, and increment the correctAnswer integer by one for each correct guess
      for (int i = 0; i < capitalsGuessList.size(); i++) {
        for (int j = 0; j < cities.length; j++) {
          if (capitalsGuessList.get(i).equalsIgnoreCase(cities[j])) {
            correctAnswers += 1;
          }
        }
      }

        // Display their score of correct guesses
        System.out.println("You got " + correctAnswers + " out of " + capitalsGuessList.size() + " guesses correct.");
         System.out.println("-------------------------------------------------------");

      //Below is for Part 2 (Sorting & Searching HashMap) of the assignment
      
        // Create new Hash Map with key : value pairs of state : capital
        HashMap<String, String> capitalHashMap = new HashMap<>(capitals[0].length);
      
        // Iterate through the 2D array defined earlier, entering in state and capitals into the hash map
        for (int i = 0; i < capitals[0].length; i++) {
            capitalHashMap.put(capitals[0][i], capitals[1][i]);
        }
      
      //First, print out the unsorted HashMap to show the changes once it gets sorted afterwards
        System.out.println("Listed below are all of the contents in the capital hash map, which have not been sorted yet:");
      System.out.println("-------------------------------------------------------");
      
        for (String state : capitalHashMap.keySet()) {
            System.out.println("The capital of " + state + " is " + capitalHashMap.get(state) + ".");
        }
      
        // TreeMap class to now sort the hash map while using a binary search tree for storage
        TreeMap<String, String> sortedCapitalCities = new TreeMap<>(capitalHashMap);
      
      System.out.println("-------------------------------------------------------");
        System.out.println("Enter a state and I will display the capital city of that state.");
        System.out.println("-------------------------------------------------------");
        System.out.println("Enter 'exit' when you are done.");
      
        // Boolean variable for the while loop
        breakOutOfLoop = false;
        while (!breakOutOfLoop) {
          
          // Prompt user for a state, display the respective capital
            System.out.println("Please enter a state: ");
            String hashMapInput = allCapitalsScanner.nextLine();
            if (hashMapInput.equalsIgnoreCase("exit")) {
             System.out.println("--------------Exiting out of program--------------------");
              breakOutOfLoop = true;
              continue;
            }
            //Check if hashMapInput is in the TreeMap as a key and display the respective value
            if (sortedCapitalCities.containsKey(hashMapInput)) {
                System.out.println("The capital of " + hashMapInput + " is " + sortedCapitalCities.get(hashMapInput) + ".");
                     System.out.println("-------------------------------------------------------");
            }
              //Ask user to try again if the hashMapInput is not in TreeMap
            else {
                System.out.println("Invalid state. Please try again, or enter 'exit'.");
                      System.out.println("-------------------------------------------------------");
            }
        }
    }
}