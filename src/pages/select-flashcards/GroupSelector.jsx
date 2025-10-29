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
  const allSelected = sets.length > 0 && sets.every(s => selectedSets.includes(s.id));
  const someSelected = sets.some(s => selectedSets.includes(s.id)) && !allSelected;

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...new Set([...selectedSets, ...sets.map(s => s.id)])]
      : selectedSets.filter(id => !sets.map(s => s.id).includes(id));
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
            key={s.id}
            control={
              <Checkbox
                checked={selectedSets.includes(s.id)}
                onChange={handleSetChange(s.id)}
              />
            }
            label={s.meta?.displayName || s.id}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
