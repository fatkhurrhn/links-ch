useEffect(() => {
    const trackAndRedirect = async () => {
      const links = JSON.parse(localStorage.getItem('trackedLinks') || [];
      const link = links.find(l => l.code === code);
      
      if (link) {
        // Simpan data tracking
        const ipData = await fetch('https://ipapi.co/json/').then(res => res.json());
        
        const updatedLinks = links.map(l => {
          if (l.code === code) {
            return {
              ...l,
              clicks: (l.clicks || 0) + 1,
              trackingData: [
                ...(l.trackingData || []),
                {
                  ...ipData,
                  timestamp: new Date().toISOString()
                }
              ]
            };
          }
          return l;
        });
        
        localStorage.setItem('trackedLinks', JSON.stringify(updatedLinks));
        window.location.href = link.originalUrl;
      } else {
        navigate('/');
      }
    };
  
    trackAndRedirect();
  }, [code, navigate]);