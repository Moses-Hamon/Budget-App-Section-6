// BUDGET CONTROLLER
var budgetController = (function() {

})();




// UI CONTROLLER
var UIController = (function() {

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        
        // 1. get field input data
        
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the Budget

        // 5. Display the budget.

        console.log('it works');
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        // event listener for ENTER
        if (event.keyCode === 13 || event.which === 13) {
            console.log('Enter Pressed');
            ctrlAddItem();
        }

   });

})(budgetController, UIController);