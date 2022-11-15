import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import close from '../../assets/close.png';
import './search-bar.css';

function SearchBar({ placeholder, icon, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const filter = e => {
        const searchWord = e.target.value.toLowerCase();
        setInputValue(searchWord);
        const newFilter = data.filter(v => {
            const lowered = v.name.toLowerCase();
            return lowered.includes(searchWord);
        });

        searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter);
    }

    const clearInput = () => {
        setFilteredData([]);
        setInputValue('');
    }

    return (
        <div className='search-bar'>
            <div>
                <Element.InputGroup hasValidation='false' style={{
                    border: '2px solid #000000',
                    borderRadius: '50px'
                }}>
                    <Element.Form.Control className='search-bar-input' type='text' value={inputValue} placeholder={placeholder} onChange={filter} style={{
                        borderColor: 'rgba(0,0,0,0)',
                        backgroundColor: 'rgba(0,0,0,0)',
                    }} />
                    <Element.Button className='search-bar-button' style={{
                        border: 'none',
                        borderColor: 'rgba(0,0,0,1)',
                        backgroundColor: 'rgba(0,0,0,0)',
                    }}>{
                            filteredData.length !== 0 || inputValue.length !== 0 ?
                                <img src={close} onClick={clearInput} style={{
                                    maxHeight: '26px',
                                    maxWidth: '26px',
                                }} /> :
                                <img src={icon} style={{
                                    maxHeight: '26px',
                                    maxWidth: '26px',
                                }} />
                        }
                    </Element.Button>
                </Element.InputGroup>
            </div>
            {filteredData != 0 && (
                <div className='results' style={{
                    marginTop: '5px',
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'rgba(255,255,255,0)',
                    boxShadow: '0 5px 15px rgba(0,0,0,.35)',
                    overflow: 'hidden',
                    overflowY: 'auto'
                }}>
                    {
                        filteredData.slice(0, 10).map(k => {
                            return <a className='search-bar-item' href={k.link} target='_blank' style={{
                                display: 'flex'
                            }}>
                                <p style={{
                                    marginLeft: '14px'
                                }}>{k.name}</p>
                            </a>
                        })
                    }
                </div>
            )}
        </div>
    );
} export default SearchBar;