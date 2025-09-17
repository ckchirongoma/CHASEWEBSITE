// LazyAI Builder Integration
document.addEventListener('DOMContentLoaded', function() {
    const builder = document.getElementById('lazyAIBuilder');
    const newProjectBtn = document.getElementById('newProject');
    const loadTemplateBtn = document.getElementById('loadTemplate');
    const templateButtons = document.querySelectorAll('[data-template]');

    // Initialize builder
    function initBuilder() {
        // Listen for messages from the LazyAI iframe
        window.addEventListener('message', function(event) {
            if (event.origin !== 'https://builder.lazyai.com') return;
            
            handleBuilderMessage(event.data);
        });
    }

    // Handle messages from LazyAI Builder
    function handleBuilderMessage(data) {
        switch(data.type) {
            case 'BUILDER_READY':
                console.log('Builder is ready');
                break;
            case 'PROJECT_SAVED':
                showNotification('Project saved successfully!');
                break;
            case 'ERROR':
                showNotification(data.message, 'error');
                break;
        }
    }

    // Create new project
    newProjectBtn.addEventListener('click', function() {
        builder.contentWindow.postMessage({
            type: 'NEW_PROJECT'
        }, 'https://builder.lazyai.com');
    });

    // Load template selector
    loadTemplateBtn.addEventListener('click', function() {
        const templateSelector = document.createElement('div');
        templateSelector.className = 'template-selector';
        // Template selector UI implementation
    });

    // Handle template selection
    templateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const templateId = this.dataset.template;
            loadTemplate(templateId);
        });
    });

    // Load specific template
    function loadTemplate(templateId) {
        builder.contentWindow.postMessage({
            type: 'LOAD_TEMPLATE',
            templateId: templateId
        }, 'https://builder.lazyai.com');
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Initialize
    initBuilder();
}); 