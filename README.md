# YouTube Unsubscribe

This JavaScript file provides a script to automate the process of unsubscribing from all channels on YouTube. It interacts with the YouTube webpage, simulating the necessary actions to unsubscribe from each channel.

## Usage

1. **Pre-requisites:**
   - Ensure you are logged in to your YouTube account.
   - Open the YouTube Subscription page (https://www.youtube.com/feed/channels) in your web browser.

2. **Loading and Scrolling:**
   - After opening the YouTube Subscription page, wait for it to fully load.
   - Scroll down to the bottom of the page to ensure all subscribed channels are loaded.
   - Wait for 1-2 minutes to allow the page to stabilize.

3. **Script Execution:**
   - Open the browser's developer console.
   - Copy and paste the entire content of the `youtube-unsubscribe.js` file into the console.
   - Press `Enter` to execute the script.

4. **Automation Process:**
   - The script iterates through each subscribed channel.
   - It simulates the necessary clicks to unsubscribe from each channel.
   - If the page becomes laggy or unresponsive, consider reloading the page and running the script again.

5. **Reloading the Page:**
   - If the script encounters issues due to page responsiveness:
     - Manually reload the YouTube Subscription page.
     - Repeat the script execution steps mentioned in Step 3.

6. **Note:**
   - This script assumes a constant subscription status for demonstration purposes.
   - Adjustments may be needed based on changes to the YouTube webpage structure.

## Disclaimer

This script is provided for educational purposes and may be subject to changes in YouTube's website structure. Use it responsibly, and be aware of YouTube's terms of service.

## License

This script is released under the [MIT License](LICENSE).
