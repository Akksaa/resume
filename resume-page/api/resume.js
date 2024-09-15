module.exports = (req, res) => {
    const { username } = req.query;
  
    // Simulated user data; ideally, this would come from a database
    const resumeData = {
      name: username,
      email: `${username}@example.com`,
      phone: '123-456-7890',
      education: 'Bachelor of Science',
      skills: 'JavaScript, HTML, CSS',
      experience: 'Software Developer at XYZ',
    };
  
    if (username) {
      res.json(resumeData);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  