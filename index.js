//INSTRUCTIONS AND NOTES AREA
//things needed
// Using this and event delegation

// REQUIREMENTS
// In terms of user experience, your shopping list app must allow users to:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

// Do not alter index.html or main.css other than adding the links to the external 
// JavaScript inside index.html. 
// Write JavaScript code that works with the existing HTML and CSS to implement 
// the required features.
// Hint: you may find it helpful to read up on and use the following 
// jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().


//-------------------------------------------------------------------------------------------------------

function handleAddItem (){
   
   $("#js-shopping-list-form").submit(function(e){
    e.preventDefault();

     $('.shopping-list').append(`<li>
        <span class="shopping-item">${$("#shopping-list-entry").val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });
  }


  $('.shopping-list').on('click', '.shopping-item-delete', function (e){
      $(this).closest('li').remove();
  });


  $('.shopping-list').on('click', '.shopping-item-toggle', function (e){
      $(this).parent().parent().children('.shopping-item').toggleClass('shopping-item__checked');
  });



 $(function(){
     handleAddItem()
  
})

