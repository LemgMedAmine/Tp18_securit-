Java.perform(function() {
    function getPassword() {
        Java.choose('com.pwnsec.firestorm.MainActivity', {
            onMatch: function(instance) {
                console.log("MainActivity instance found: " + instance);
                try {
                    var pass = instance.Password();
                    console.log("FireBase Password: " + pass);
                } catch (e) {
                    console.log("Error occurred: " + e);
                }
            },
            onComplete: function() {
                console.log("Search completed. Exiting script.");
            }
        });
    }
    setTimeout(getPassword, 4000);
});