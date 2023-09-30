import { useEffect, useState } from "react"
import { toyService } from "../services/toy.service"
import { useNavigate, useParams } from "react-router-dom"
import { saveToy } from "../store/actions/toy.actions"
import { MultiSelect } from "../cmps/MultiSelect"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export function ToyEdit() {

    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!toyId) return
        getToy()
    }, [])

    async function getToy() {
        try {
            const toy = await toyService.getById(toyId)
            setToyToEdit(toy)
        } catch (err) {
            console.log('ShowErrorMsg')
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setToyToEdit({ ...toyToEdit, [field]: value })
    }

    async function onSave(ev) {
        ev.preventDefault()
        const newToy = {
            ...toyToEdit
        }
        console.log(newToy)
        try {
            saveToy(newToy)
            console.log('ShowSuccsesMsg')
            navigate('/toy')
        } catch (err) {
            console.log('ShowErrorMsg')
        }
    }

    return (
        <section className="toy-edit main-layout full">
            <h2>Edit Page</h2>
            <form onSubmit={onSave} className="edit-form full">
                <div>
                    <TextField id="outlined-basic" label="Name" variant="outlined" type="text"
                        value={toyToEdit.name} onChange={handleChange} name="name" sx={{ marginBlockEnd: 3, width: 250 }} />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Price" variant="outlined" type="number"
                        value={toyToEdit.price} onChange={handleChange} name="price" sx={{ marginBlockEnd: 3, width: 250 }} />
                </div>

                <MultiSelect handleChange={handleChange} />

                <FormControl sx={{ marginBlockEnd: 3, width: 250 }}>
                    <InputLabel>Stock</InputLabel>
                    <Select
                        labelId="stock"
                        name="inStock"
                        value={toyToEdit.inStock}
                        onChange={handleChange}
                        sx={{ width: 250 }}
                        label="Stock">
                        <MenuItem value={true}>In stock</MenuItem>
                        <MenuItem value={false}>Out of stock</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <button onClick={onSave} className="save-toy-btn">Save</button>
                </div>

            </form>
        </section>
    )
}