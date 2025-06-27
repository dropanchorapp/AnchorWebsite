#!/usr/bin/env node

/**
 * Official AT Protocol Lexicon Validator
 * Uses the official @atproto/lexicon package for validation
 */

const fs = require('fs');
const path = require('path');
const { Lexicons } = require('@atproto/lexicon');

function validateLexiconFile(filePath) {
    console.log(`🔍 Validating lexicon file: ${filePath}`);
    
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            process.exit(1);
        }

        // Read and parse JSON
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let lexiconJson;
        
        try {
            lexiconJson = JSON.parse(fileContent);
        } catch (parseError) {
            console.error(`❌ Invalid JSON in ${filePath}:`);
            console.error(`   ${parseError.message}`);
            process.exit(1);
        }

        // Create lexicons collection
        const lexicons = new Lexicons();
        
        // Add and validate the lexicon
        try {
            lexicons.add(lexiconJson);
            console.log('✅ Lexicon is valid according to official AT Protocol specification!');
            
            // Print summary information
            console.log('\n📋 Lexicon Summary:');
            console.log(`   ID: ${lexiconJson.id}`);
            console.log(`   Version: ${lexiconJson.lexicon}`);
            if (lexiconJson.description) {
                console.log(`   Description: ${lexiconJson.description}`);
            }
            
            // List definitions
            if (lexiconJson.defs) {
                const defNames = Object.keys(lexiconJson.defs);
                console.log(`   Definitions: ${defNames.join(', ')}`);
                
                // Show main definition type if it exists
                if (lexiconJson.defs.main) {
                    console.log(`   Main Type: ${lexiconJson.defs.main.type}`);
                }
            }
            
            console.log('\n🎉 Validation successful!');
            
        } catch (validationError) {
            console.error(`❌ Lexicon validation failed:`);
            console.error(`   ${validationError.message}`);
            
            // Additional context if available
            if (validationError.cause) {
                console.error(`   Cause: ${validationError.cause}`);
            }
            
            console.log('\n💡 This lexicon does not conform to the AT Protocol specification.');
            console.log('   Please check the official docs: https://atproto.com/specs/lexicon');
            
            process.exit(1);
        }
        
    } catch (error) {
        console.error(`❌ Unexpected error validating ${filePath}:`);
        console.error(`   ${error.message}`);
        process.exit(1);
    }
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('🔧 AT Protocol Lexicon Validator (Official)');
        console.log('   Uses @atproto/lexicon for validation\n');
        console.log('Usage:');
        console.log('  node validate-lexicon-official.js <lexicon-file.json>');
        console.log('  npm run validate:checkin');
        console.log('  npm test\n');
        console.log('Example:');
        console.log('  node validate-lexicon-official.js ./.well-known/atproto-lexicons/app.dropanchor.checkin.json');
        process.exit(1);
    }

    const filePath = path.resolve(args[0]);
    validateLexiconFile(filePath);
}

if (require.main === module) {
    main();
}

module.exports = { validateLexiconFile }; 