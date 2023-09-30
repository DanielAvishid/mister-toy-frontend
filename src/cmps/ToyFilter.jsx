import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { MultiSelect } from "./MultiSelect"

export function ToyFilter({ handleChange, filterBy }) {
    return (
        <section className="toy-filter-container full">
            <TextField id="outlined-basic" label="Search" variant="outlined" type="text"
                value={filterBy.txt} onChange={handleChange} name="txt" sx={{ marginBlockEnd: 3, width: 250 }} />

            <TextField id="outlined-basic" label="Min price" variant="outlined" type="number"
                value={filterBy.minPrice} onChange={handleChange} name="minPrice" sx={{ marginBlockEnd: 3, width: 250 }} />

            <TextField id="outlined-basic" label="Max price" variant="outlined" type="number"
                value={filterBy.maxPrice} onChange={handleChange} name="maxPrice" sx={{ marginBlockEnd: 3, width: 250 }} />

            <MultiSelect handleChange={handleChange} />

            <FormControl sx={{ marginBlockEnd: 3, width: 250 }}>
                <InputLabel>Stock</InputLabel>
                <Select
                    labelId="stock"
                    name="inStock"
                    value={filterBy.inStock || 'all'}
                    onChange={handleChange}
                    sx={{ width: 250 }}
                    label="Stock">
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={'inStock'}>In stock</MenuItem>
                    <MenuItem value={"outStock"}>Out of stock</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ marginBlockEnd: 1, width: 250 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                    labelId="sortBy"
                    name="sortBy"
                    value={filterBy.sortBy || 'name'}
                    onChange={handleChange}
                    sx={{ width: 250 }}
                    label="Sort-By">
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={"price"}>Price</MenuItem>
                </Select>
            </FormControl>

            <FormControlLabel onChange={handleChange} control={<Checkbox />} label="Descending" />
        </section>
    )
}