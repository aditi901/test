document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');

    uploadButton.addEventListener('click', function() {
        const status = `File uploaded successfully.`;
        window.location.href = 'json_status.html';
    });
});
