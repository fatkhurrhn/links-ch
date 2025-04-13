const generateLink = async () => {
    if (!originalUrl) return;
    
    setLoading(true);
    
    // Simulasi delay request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate random code (6 karakter)
    const randomCode = Math.random().toString(36).substring(2, 8);
    const trackingLink = `${window.location.origin}/r/${randomCode}`;
    
    // Simpan ke localStorage
    const newLink = {
      originalUrl,
      code: randomCode,
      clicks: 0,
      trackingData: []
    };
    
    const existingLinks = JSON.parse(localStorage.getItem('trackedLinks') || '[]');
    localStorage.setItem('trackedLinks', JSON.stringify([...existingLinks, newLink]));
    
    setGeneratedLink(trackingLink);
    setLoading(false);
  };