# Update Documentation Workflow  

This GitHub Actions workflow automatically generates and updates documentation whenever changes are pushed to the `main` branch for the `Schemas/OWL/aia.owl` file. 
It uses, a tool for generating OWL ontology documentation. 

<div style="background-color: #f0f0f0; border-left: 6px solid #1e90ff; padding: 10px; margin-bottom: 10px;">
  <p style="display: flex; align-items: center;">
    <span style="font-size: 20px; margin-right: 10px;">💡</span>
    <span><b>IMPORTANT:</b> ensure that the <tt>.owl</tt> file is serialised using RDF/XML serialisation and not OWL/XML serialisation, otherwise pyLODE parsing will fail.
</span>
  </p>
</div>

## How It Works  

1. **Triggers**  
   - Runs when `aia.owl` is modified and committed to the `main` branch.  

2. **Workflow Steps**  
   - **Checks out the repository** to access the latest changes.  
   - **Sets up Python** and installs `pyLODE`.
   - **Generates HTML documentation** from `aia.owl` and stores it in the `Documentation` folder.  
   - **Commits and pushes** the updated documentation back to the repository.  

## Dependencies  
- [pyLODE](https://github.com/RDFLib/pyLODE) (for ontology documentation generation)
