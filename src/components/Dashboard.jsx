useEffect(() => {
    const fetchLinks = () => {
      const links = JSON.parse(localStorage.getItem('trackedLinks') || []);
      setLinks(links);
      setLoading(false);
    };
  
    fetchLinks();
  }, []);