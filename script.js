function isValidWalletAddress(address) {
    const regex = /^(0x)?[0-9a-f]{40}$/i;
    return regex.test(address);
}

function checkEligibility() {
    const walletAddress = document.getElementById('walletAddress').value;

    if (!isValidWalletAddress(walletAddress)) {
        document.getElementById('result').innerText = 'Invalid wallet address';
        return;
    }

    // List of eligible wallet addresses
    const eligibleWallets = [
        '0x48992bDfDDeF8b5601c765CACf433E6Fa8eE44B1',
        '0x2f19b4c0fCAFB48a21CBbA3c631F7b12cB6eF53a',
        '0x3aA2b5Dc4cA13489a95E6e0C86e0a9792c9eD55B',
        // Add more addresses as needed
    ];

    if (eligibleWallets.includes(walletAddress)) {
        document.getElementById('result').innerText = 'You are eligible';
    } else {
        document.getElementById('result').innerText = 'Sorry, you are not eligible';
        document.getElementById('result').innerHTML += '<br><a href="https://https://twitter.com/BasedChadNFT">Interact with Twitter to get eligible </a>';
    }
}
