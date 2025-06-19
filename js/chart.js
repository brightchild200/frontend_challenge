 // Chart.js implementation
        function initChart() {
            const ctx = document.getElementById('impactChart');
            const fallback = document.getElementById('chartFallback');
            
            if (ctx && typeof Chart !== 'undefined') {
                ctx.style.display = 'block';
                fallback.style.display = 'none';
                
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'CO₂ Reduction (%)',
                            data: [10, 15, 25, 30, 40, 45],
                            borderColor: '#4ADE80',
                            backgroundColor: 'rgba(74, 222, 128, 0.1)',
                            tension: 0.4,
                            fill: true
                        }, {
                            label: 'Energy Saved (%)',
                            data: [8, 12, 20, 28, 35, 42],
                            borderColor: '#2B7A0B',
                            backgroundColor: 'rgba(43, 122, 11, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: {
                                    color: currentTheme === 'dark' ? '#FFFFFF' : '#1E293B'
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: currentTheme === 'dark' ? '#FFFFFF' : '#1E293B'
                                },
                                grid: {
                                    color: currentTheme === 'dark' ? '#334155' : '#E2E8F0'
                                }
                            },
                            x: {
                                ticks: {
                                    color: currentTheme === 'dark' ? '#FFFFFF' : '#1E293B'
                                },
                                grid: {
                                    color: currentTheme === 'dark' ? '#334155' : '#E2E8F0'
                                }
                            }
                        }
                    }
                });
            }
        }

        // Initialize chart when page loads
        window.addEventListener('load', function() {
            setTimeout(initChart, 3000); // Wait for loader to finish
        });
