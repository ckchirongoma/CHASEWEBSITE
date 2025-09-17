document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initModals();
    initTooltips();
    initPlanMode();
    
    // Navigation functionality
    fu    function showAlert(type, message) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    // Plan Mode Modal functionality
    function initPlanMode() {
        // Create Plan Mode modal HTML
        const planModeModal = `
            <div id="planModeModal" class="modal plan-mode-modal" style="display: none;">
                <div class="modal-content plan-mode-content">
                    <div class="modal-header">
                        <h2>What do you want to automate?</h2>
                        <span class="close-modal">&times;</span>
                    </div>
                    <form id="planModeForm" class="plan-mode-form">
                        <div class="form-group">
                            <label for="automationGoal">What's your automation goal?</label>
                            <textarea id="automationGoal" name="goal" placeholder="e.g. Automate weekly reporting, streamline data entry, integrate systems..." rows="3" required></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="currentSystems">What systems do you currently use?</label>
                            <div class="systems-grid">
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="gmail"> Gmail
                                </label>
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="sheets"> Google Sheets
                                </label>
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="airtable"> Airtable
                                </label>
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="supabase"> Supabase
                                </label>
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="shopify"> Shopify
                                </label>
                                <label class="system-option">
                                    <input type="checkbox" name="systems" value="pipedream"> Pipedream
                                </label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="desiredOutcome">What outcome do you want?</label>
                            <input type="text" id="desiredOutcome" name="outcome" placeholder="e.g. Save 10 hours/week, reduce errors, faster reporting..." required>
                        </div>
                        
                        <div class="form-group">
                            <label for="frequency">How often should this run?</label>
                            <select id="frequency" name="frequency" required>
                                <option value="">Select frequency...</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="on-demand">On-demand</option>
                                <option value="real-time">Real-time</option>
                            </select>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="closePlanMode()">Cancel</button>
                            <button type="submit" class="btn btn-primary">Get Recommendations →</button>
                        </div>
                    </form>
                    
                    <div id="planResults" class="plan-results" style="display: none;">
                        <h3>Recommended Implementation Plan</h3>
                        <div id="recommendedIntegrations" class="recommended-integrations"></div>
                        <div id="agentTemplates" class="agent-templates"></div>
                        <div class="plan-actions">
                            <button type="button" class="btn btn-secondary" onclick="resetPlanMode()">← Back</button>
                            <button type="button" class="btn btn-primary" onclick="buildMVP()">Build MVP</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', planModeModal);
        
        // Add Plan Mode trigger buttons
        const planModeTriggers = document.querySelectorAll('[data-trigger="plan-mode"]');
        planModeTriggers.forEach(trigger => {
            trigger.addEventListener('click', openPlanMode);
        });
        
        // Modal event listeners
        const modal = document.getElementById('planModeModal');
        const closeBtn = modal.querySelector('.close-modal');
        const form = document.getElementById('planModeForm');
        
        closeBtn.addEventListener('click', closePlanMode);
        form.addEventListener('submit', handlePlanModeSubmit);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePlanMode();
            }
        });
    }
    
    window.openPlanMode = function() {
        const modal = document.getElementById('planModeModal');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    window.closePlanMode = function() {
        const modal = document.getElementById('planModeModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetPlanMode();
    };
    
    window.resetPlanMode = function() {
        const form = document.getElementById('planModeForm');
        const results = document.getElementById('planResults');
        
        form.style.display = 'block';
        results.style.display = 'none';
        form.reset();
    };
    
    function handlePlanModeSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const goal = formData.get('goal');
        const systems = formData.getAll('systems');
        const outcome = formData.get('outcome');
        const frequency = formData.get('frequency');
        
        // Generate recommendations based on input
        generateRecommendations({ goal, systems, outcome, frequency });
    }
    
    function generateRecommendations(data) {
        const form = document.getElementById('planModeForm');
        const results = document.getElementById('planResults');
        const integrationsDiv = document.getElementById('recommendedIntegrations');
        const templatesDiv = document.getElementById('agentTemplates');
        
        // Hardcoded recommendations for now
        const integrations = getRecommendedIntegrations(data.systems);
        const templates = getAgentTemplates(data.goal);
        
        integrationsDiv.innerHTML = `
            <h4>Recommended Integrations</h4>
            <div class="integration-list">
                ${integrations.map(integration => `
                    <div class="integration-item">
                        <strong>${integration.name}</strong>
                        <p>${integration.description}</p>
                        <a href="${integration.docUrl}" target="_blank" class="doc-link">API Documentation →</a>
                    </div>
                `).join('')}
            </div>
        `;
        
        templatesDiv.innerHTML = `
            <h4>Suggested Agent Templates</h4>
            <div class="template-list">
                ${templates.map(template => `
                    <div class="template-item">
                        <strong>${template.name}</strong>
                        <p>${template.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        form.style.display = 'none';
        results.style.display = 'block';
    }
    
    function getRecommendedIntegrations(selectedSystems) {
        const allIntegrations = {
            gmail: { name: 'Gmail API', description: 'Send and read emails programmatically', docUrl: 'https://developers.google.com/gmail/api' },
            sheets: { name: 'Google Sheets API', description: 'Read and write spreadsheet data', docUrl: 'https://developers.google.com/sheets/api' },
            airtable: { name: 'Airtable API', description: 'Manage database records', docUrl: 'https://airtable.com/developers/web/api/introduction' },
            supabase: { name: 'Supabase API', description: 'Database and authentication', docUrl: 'https://supabase.com/docs/reference/javascript/introduction' },
            shopify: { name: 'Shopify API', description: 'E-commerce store management', docUrl: 'https://shopify.dev/docs/api' },
            pipedream: { name: 'Pipedream', description: 'Workflow automation platform', docUrl: 'https://pipedream.com/docs/' }
        };
        
        return selectedSystems.map(system => allIntegrations[system]).filter(Boolean);
    }
    
    function getAgentTemplates(goal) {
        const templates = [
            { name: 'Reporting Agent', description: 'Automated data collection and report generation' },
            { name: 'Data Processing Agent', description: 'Clean, transform, and validate data' },
            { name: 'Communication Agent', description: 'Automated email and notification handling' },
            { name: 'Monitoring Agent', description: 'Track system performance and alerts' }
        ];
        
        return templates.slice(0, 2); // Return 2 most relevant templates
    }
    
    window.buildMVP = function() {
        showAlert('success', 'MVP build request submitted! We\'ll contact you within 24 hours to begin implementation.');
        closePlanMode();
    };
});}avigation() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        // Mobile menu toggle
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                }
            });
            
            // Close mobile menu when clicking nav links
            const allNavLinks = document.querySelectorAll('.nav-link');
            allNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }
        
        // Set active navigation based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-link');
        
        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Scroll animations
    function initScrollAnimations() {
        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }    // Modal functionality
    function initModals() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modal;
                const modal = document.getElementById(modalId);
                
                if (modal) {
                    openModal(modal);
                }
            });
        });
        
        // Close modal on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    closeModal(activeModal);
                }
            }
        });
    }
    
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Tooltip functionality
    function initTooltips() {
        const tooltips = document.querySelectorAll('.tooltip');
        
        tooltips.forEach(tooltip => {
            const text = tooltip.getAttribute('data-tooltip');
            if (text) {
                const tooltipElement = document.createElement('span');
                tooltipElement.className = 'tooltip-text';
                tooltipElement.textContent = text;
                tooltip.appendChild(tooltipElement);
            }
        });
    }
    
    // Handle form submissions
    document.addEventListener('submit', function(e) {
        const form = e.target;
        
        if (form.classList.contains('needs-validation')) {
            e.preventDefault();
            
            if (!validateForm(form)) {
                return false;
            }
            
            // If validation passes, submit the form
            submitForm(form);
        }
    });
    
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('.form-control');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                markInvalid(input, 'This field is required');
                isValid = false;
            } else {
                markValid(input);
            }
            
            // Email validation
            if (input.type === 'email' && input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    markInvalid(input, 'Please enter a valid email address');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    function markInvalid(input, message) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
        let feedback = input.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            input.parentNode.insertBefore(feedback, input.nextSibling);
        }
        feedback.textContent = message;
    }
    
    function markValid(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.remove();
        }
    }
    
    async function submitForm(form) {
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="loader"></span> Sending...';
            
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showAlert('success', 'Thank you! We\'ll be in touch within 24 hours to schedule your discovery call.');
                form.reset();
                
                // Track conversion event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'engagement',
                        'event_label': 'discovery_call_request'
                    });
                }
            } else {
                throw new Error('Form submission failed. Please try again or email us directly.');
            }
        } catch (error) {
            showAlert('error', error.message || 'Something went wrong. Please try emailing us at hello@chasecontinental.com');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }
    
    function showAlert(type, message) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}); 