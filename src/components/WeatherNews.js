import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
  Modal,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { weatherNews } from '../data/weatherNews';

const NewsCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
});

const NewsImage = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
});

const TitleTypography = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '12px',
});

const SummaryTypography = styled(Typography)({
  fontSize: '1rem',
  marginTop: '12px',
});

const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case 'critical':
      return '#d32f2f';
    case 'extreme':
      return '#f57c00';
    case 'severe':
      return '#ffc107';
    case 'moderate':
      return '#4caf50';
    default:
      return '#2196f3';
  }
};

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '800px',
  maxHeight: '90vh',
  overflow: 'auto',
  backgroundColor: 'white',
  boxShadow: 24,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
}));

const WeatherNews = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  // Take only the first 10 articles
  const displayedArticles = weatherNews.slice(0, 10);

  return (
    <Box sx={{ 
      backgroundColor: 'rgba(176, 224, 255, 0.3)', 
      minHeight: '100vh',
      paddingBottom: 4 
    }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Weather News & Alerts
        </Typography>
        <Grid container spacing={4}>
          {displayedArticles.map((article) => (
            <Grid item xs={12} sm={6} key={article.id}>
              <NewsCard onClick={() => handleArticleClick(article)}>
                <NewsImage src={article.image} alt={article.title} />
                <StyledCardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" color="text.secondary">
                      {article.date}
                    </Typography>
                    <Chip
                      label={article.severity}
                      size="medium"
                      sx={{
                        backgroundColor: getSeverityColor(article.severity),
                        color: 'white',
                        fontSize: '0.9rem',
                        padding: '4px',
                      }}
                    />
                  </Box>
                  <TitleTypography variant="h5" component="h2">
                    {article.title}
                  </TitleTypography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                    {article.location}
                  </Typography>
                  <SummaryTypography variant="body1" color="text.secondary">
                    {article.summary}
                  </SummaryTypography>
                </StyledCardContent>
              </NewsCard>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={Boolean(selectedArticle)}
          onClose={handleCloseModal}
          aria-labelledby="article-modal-title"
        >
          <ModalContent>
            {selectedArticle && (
              <>
                <NewsImage
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  sx={{ height: '400px', borderRadius: 1 }}
                />
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" color="text.secondary">
                      {selectedArticle.date}
                    </Typography>
                    <Chip
                      label={selectedArticle.severity}
                      size="medium"
                      sx={{
                        backgroundColor: getSeverityColor(selectedArticle.severity),
                        color: 'white',
                        fontSize: '0.9rem',
                        padding: '4px',
                      }}
                    />
                  </Box>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {selectedArticle.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    {selectedArticle.location}
                  </Typography>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    {selectedArticle.fullArticle}
                  </Typography>
                </Box>
              </>
            )}
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default WeatherNews; 