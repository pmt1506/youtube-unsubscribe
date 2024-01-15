async function isSubscribed(channel) {
    // Implement logic to check if the channel is subscribed
    // For demonstration purposes, assuming the channel is always subscribed
    return true;
}

async function performActions(channel) {
    var channelRow = document.querySelector(`#grid-container > ytd-channel-renderer:nth-child(${channel})`);

    if (!channelRow) {
        console.log("Could not find channel row for Channel " + channel);
        return false;  // Stop the script if the channel row is not found
    }

    // Log the channel name
    var channelName = channelRow.querySelector("#text").textContent;
    console.log("Processing Channel: " + channelName);

    // Click on the notification button
    var notificationButton = channelRow.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button");

    if (notificationButton) {
        notificationButton.click();

        // Wait for a short duration if needed
        await new Promise(resolve => setTimeout(resolve, 100));

        // Click on the second menu item (adjust the index as needed)
        var secondMenuItem = document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4)");

        if (secondMenuItem) {
            secondMenuItem.click();

            // Wait for a short duration if needed
            await new Promise(resolve => setTimeout(resolve, 100));

            // Click on the confirm button
            var confirmButton = document.querySelector("#confirm-button > yt-button-shape > button");

            if (confirmButton && confirmButton.getAttribute("aria-label") === "Hủy đăng ký") {
                confirmButton.click();
                // Increment the channel for the next iteration
                return true;
            } else {
                console.log("Could not find or invalid aria-label for the confirm button for Channel " + channelName);
            }
        } else {
            console.log("Could not find the second menu item for Channel " + channelName);
        }
    } else {
        console.log("Could not find notification button for Channel " + channelName);
    }

    // Return false to indicate that the channel is not subscribed or the actions failed
    return false;
}

// Start the loop
var channel = 1;
while (true) {
    if (await performActions(channel)) {
        // Increment the channel only if the actions were successful
        channel++;
    } else {
        // Stop the script if the channel row is not found
        break;
    }
}
