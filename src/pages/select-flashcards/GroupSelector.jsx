import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Divider,
} from '@mui/material';

export default function GroupSelector({ name, group, selectedSets, onChange }) {
  const sets = group.sets || [];

  // Determine if all sets are selected
  const allSelected = sets.length > 0 && sets.every(s => selectedSets.includes(s.key));
  const someSelected = sets.some(s => selectedSets.includes(s.key)) && !allSelected;

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...new Set([...selectedSets, ...sets.map(s => s.key)])]
      : selectedSets.filter(key => !sets.map(s => s.key).includes(key));
    onChange(newSelection);
  };

  const handleSetChange = (setId) => (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...selectedSets, setId]
      : selectedSets.filter(id => id !== setId);
    onChange(newSelection);
  };

  return (
    <Box sx={{ mb: 3, p: 2, borderRadius: 2, bgcolor: 'background.paper', boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>
        {group.meta?.displayName || name}
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleSelectAll}
            />
          }
          label="Select all"
        />
        <Divider sx={{ my: 1 }} />

        {sets.map((s) => (
          <FormControlLabel
            key={s.key}
            control={
              <Checkbox
                checked={selectedSets.includes(s.key)}
                onChange={handleSetChange(s.key)}
              />
            }
            label={s.displayName || s.key}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
