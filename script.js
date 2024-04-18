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

    if (walletAddress.startsWith('0x1')) {
        document.getElementById('result').innerText = 'Eligible';
    } else {
        document.getElementById('result').innerText = 'Not Eligible';
    }
}
