$(function(){

    chrome.storage.sync.get(['numProcessed'],function(store){
        if (store.numProcessed == null) {
            chrome.storage.sync.set({'numProcessed': 0}, function(){               
                console.log('numProcessed set to 0');
            }

            // set to 0 because not already set
            $('#numProcessed').text(0);
        } else {
            $('#numProcessed').text(store.numProcessed);
        }
    });


    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total', 'limit'],function(budget){
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function(){               
                if (amount && newTotal >= budget.limit){
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title: "Limit reached!",
                        message: "Uh oh, look's like you've reached your alloted limit."
                };
                chrome.notifications.create('limitNotif', notifOptions);

            }
            });
            $('#total').text(newTotal);
            $('#amount').val('');

           

        });
    });
});

function copyLink() {
  /* Get the text field */
  var copyText = document.getElementById("copy-btn");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}